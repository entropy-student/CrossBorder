import { Migration } from "@medusajs/framework/mikro-orm/migrations"

export class Migration20260908000100 extends Migration {
  async up(): Promise<void> {
    this.addSql(`alter table if exists "paypal_event_inbox" drop constraint if exists "paypal_event_inbox_status_check";`)
    this.addSql(`create index if not exists "IDX_paypal_event_inbox_dispatch" on "paypal_event_inbox" ("status", "received_at");`)
  }

  async down(): Promise<void> {
    this.addSql(`drop index if exists "IDX_paypal_event_inbox_dispatch";`)
  }
}
