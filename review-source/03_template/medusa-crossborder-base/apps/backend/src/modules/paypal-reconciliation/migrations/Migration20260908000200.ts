import { Migration } from "@medusajs/framework/mikro-orm/migrations"

export class Migration20260908000200 extends Migration {
  async up(): Promise<void> {
    this.addSql(`
      create table if not exists "paypal_payment_operation" (
        "id" text not null,
        "operation_key" text not null,
        "operation_type" text not null,
        "status" text not null default 'pending',
        "paypal_order_id" text null,
        "paypal_capture_id" text null,
        "paypal_refund_id" text null,
        "medusa_payment_id" text null,
        "medusa_session_id" text null,
        "medusa_order_id" text null,
        "amount" text null,
        "currency_code" text null,
        "failure_reason" text null,
        "safe_metadata" jsonb null,
        "created_at" timestamptz not null default now(),
        "updated_at" timestamptz not null default now(),
        "deleted_at" timestamptz null,
        primary key ("id")
      );
    `)
    this.addSql(`create unique index if not exists "IDX_paypal_payment_operation_key" on "paypal_payment_operation" ("operation_key");`)
    this.addSql(`create index if not exists "IDX_paypal_payment_operation_status" on "paypal_payment_operation" ("status");`)
  }

  async down(): Promise<void> {
    this.addSql(`drop table if exists "paypal_payment_operation";`)
  }
}
