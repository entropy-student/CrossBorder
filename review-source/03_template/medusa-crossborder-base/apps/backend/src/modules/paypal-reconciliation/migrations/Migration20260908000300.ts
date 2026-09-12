import { Migration } from "@medusajs/framework/mikro-orm/migrations"

export class Migration20260908000300 extends Migration {
  async up(): Promise<void> {
    this.addSql(`alter table if exists "paypal_event_inbox" add column if not exists "created_at" timestamptz not null default now();`)
    this.addSql(`alter table if exists "paypal_event_inbox" add column if not exists "updated_at" timestamptz not null default now();`)
    this.addSql(`alter table if exists "paypal_event_inbox" add column if not exists "deleted_at" timestamptz null;`)
    this.addSql(`alter table if exists "paypal_payment_operation" add column if not exists "created_at" timestamptz not null default now();`)
    this.addSql(`alter table if exists "paypal_payment_operation" add column if not exists "updated_at" timestamptz not null default now();`)
    this.addSql(`alter table if exists "paypal_payment_operation" add column if not exists "deleted_at" timestamptz null;`)
  }

  async down(): Promise<void> {
    this.addSql(`alter table if exists "paypal_event_inbox" drop column if exists "deleted_at";`)
    this.addSql(`alter table if exists "paypal_event_inbox" drop column if exists "updated_at";`)
    this.addSql(`alter table if exists "paypal_event_inbox" drop column if exists "created_at";`)
    this.addSql(`alter table if exists "paypal_payment_operation" drop column if exists "deleted_at";`)
    this.addSql(`alter table if exists "paypal_payment_operation" drop column if exists "updated_at";`)
    this.addSql(`alter table if exists "paypal_payment_operation" drop column if exists "created_at";`)
  }
}
