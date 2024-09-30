exports.up = (pgm) => {
  pgm.createTable("example", {
    id: "id",
    name: { type: "varchar(50)", notNull: true },
    exampleId: { type: "int", notNull: true }
  });
};

exports.down = (pgm) => {
  pgm.dropTable("example");
};
