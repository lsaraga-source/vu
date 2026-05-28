// Base de données SQLite locale — stockage offline-first de tous les items Vü
import * as SQLite from 'expo-sqlite';

// Ouverture (ou création) de la base de données locale
const db = SQLite.openDatabaseSync('vu.db');

// Création de la table principale si elle n'existe pas encore
export function initialiserBase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS items (
      -- Identifiants
      id TEXT PRIMARY KEY NOT NULL,
      type TEXT NOT NULL,
      statut TEXT NOT NULL DEFAULT 'consumed',

      -- Dates
      date_ajout TEXT NOT NULL,
      date_consommation TEXT,

      -- Métadonnées API
      titre TEXT NOT NULL,
      createur TEXT,
      annee INTEGER,
      duree INTEGER,
      cover_url TEXT,
      synopsis TEXT,

      -- Métadonnées utilisateur
      note REAL,
      avis TEXT,
      tags TEXT,

      -- Contexte
      lieu TEXT,
      avec_qui TEXT,
      source_decouverte TEXT,

      -- Couleur dominante pour le hero
      couleur_dominante TEXT,

      -- Synchronisation cloud
      synced INTEGER DEFAULT 0,
      updated_at TEXT NOT NULL
    );
  `);
}

// Récupère tous les items triés par date d'ajout décroissante
export function obtenirTousLesItems() {
  return db.getAllSync('SELECT * FROM items ORDER BY date_ajout DESC');
}

// Récupère les items récents (limité à N)
export function obtenirItemsRecents(limite: number = 10) {
  return db.getAllSync(
    'SELECT * FROM items ORDER BY date_ajout DESC LIMIT ?',
    [limite]
  );
}

// Insère ou met à jour un item
export function sauvegarderItem(item: {
  id: string;
  type: string;
  statut: string;
  date_ajout: string;
  date_consommation?: string;
  titre: string;
  createur?: string;
  annee?: number;
  duree?: number;
  cover_url?: string;
  synopsis?: string;
  note?: number;
  avis?: string;
  tags?: string;
  lieu?: string;
  avec_qui?: string;
  source_decouverte?: string;
  couleur_dominante?: string;
  updated_at: string;
}) {
  db.runSync(
    `INSERT OR REPLACE INTO items (
      id, type, statut, date_ajout, date_consommation,
      titre, createur, annee, duree, cover_url, synopsis,
      note, avis, tags, lieu, avec_qui, source_decouverte,
      couleur_dominante, synced, updated_at
    ) VALUES (
      ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?, ?,
      ?, 0, ?
    )`,
    [
      item.id, item.type, item.statut, item.date_ajout, item.date_consommation ?? null,
      item.titre, item.createur ?? null, item.annee ?? null, item.duree ?? null,
      item.cover_url ?? null, item.synopsis ?? null,
      item.note ?? null, item.avis ?? null, item.tags ?? null,
      item.lieu ?? null, item.avec_qui ?? null, item.source_decouverte ?? null,
      item.couleur_dominante ?? null, item.updated_at,
    ]
  );
}

// Supprime un item par son id
export function supprimerItem(id: string) {
  db.runSync('DELETE FROM items WHERE id = ?', [id]);
}

export default db;
