import { pgTable, serial, integer, text, timestamp, date } from 'drizzle-orm/pg-core';

export const task = pgTable('task', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	priority: integer('priority').notNull().default(1)
});

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	nomorPeserta: text('nomor_peserta').notNull().unique(),
	nik: text('nik').notNull().unique(),
	namaLengkap: text('nama_lengkap').notNull(),
	jenisKelamin: text('jenis_kelamin').notNull(),
	tanggalLahir: date('tanggal_lahir', { mode: 'date' }).notNull(),
	tempatLahir: text('tempat_lahir').notNull(),
	agama: text('agama').notNull(),
	email: text('email').notNull().unique(),
	noHp: text('no_hp').notNull(),
	passwordHash: text('password_hash').notNull(),
	// Hook untuk fitur approval admin nanti; login belum di-gate kolom ini.
	status: text('status').notNull().default('active'),
	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow()
});

export const session = pgTable('session', {
	// Token acak (32 byte, base64url) dipakai langsung sebagai PK.
	id: text('id').primaryKey(),
	userId: integer('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow()
});
