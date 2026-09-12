import { Migration } from "@medusajs/framework/mikro-orm/migrations"

export class Migration20260907000100 extends Migration {
  async up(): Promise<void> {
    this.addSql(`
      create table if not exists "paypal_event_inbox" (
        "id" text not null,
        "provider_event_id" text not null,
        "provider" text not null default 'paypal',
        "status" text not null default 'received',
        "provider_resource_id" text null,
        "medusa_session_id" text null,
        "medusa_order_id" text null,
        "amount" text null,
        "currency_code" text null,
        "event_type" text not null,
        "received_at" timestamptz not null default now(),
        "applied_at" timestamptz null,
        "failure_reason" text null,
        "safe_metadata" jsonb null,
        "created_at" timestamptz not null default now(),
        "updated_at" timestamptz not null default now(),
        "deleted_at" timestamptz null,
        primary key ("id")
      );
    `)
    this.addSql(`create unique index if not exists "IDX_paypal_event_inbox_provider_event_id" on "paypal_event_inbox" ("provider_event_id");`)
    this.addSql(`create index if not exists "IDX_paypal_event_inbox_status" on "paypal_event_inbox" ("status");`)
  }

  async down(): Promise<void> {
    this.addSql(`drop table if exists "paypal_event_inbox";`)
  }
}
