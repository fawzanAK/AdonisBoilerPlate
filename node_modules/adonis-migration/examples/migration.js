"use strict";

const Schema = use("Schema");
const Database = use("Database");

class DataMigrationSchema extends Schema {
  up() {
    this.create("data_migrations", table => {
      table.increments();
      table.string("name", 255).notNullable();
      table.string("file", 255).notNullable();
      table.integer("batch").unsigned();
      table.timestamps();
      table.unique(["name", "file"]);
    });
  }

  async down() {
    this.drop("data_migrations");
  }
}

module.exports = DataMigrationSchema;
