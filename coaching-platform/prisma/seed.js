require("dotenv/config");
const { PrismaClient } = require("@prisma/client");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: String(process.env.DATABASE_URL || "file:./dev.db"),
  }),
});

async function main() {
  await prisma.course.upsert({
    where: { slug: "jee-preparation" },
    update: {},
    create: {
      slug: "jee-preparation",
      name: "JEE Preparation",
      mode: "Offline",
      duration: "1 Year",
      priceInr: 50000,
      description:
        "Concept clarity + weekly tests + full mock series for JEE aspirants.",
    },
  });

  await prisma.course.upsert({
    where: { slug: "neet-crash-course" },
    update: {},
    create: {
      slug: "neet-crash-course",
      name: "NEET Crash Course",
      mode: "Online",
      duration: "3 Months",
      priceInr: 20000,
      description:
        "Rapid revision program with high-frequency mocks and topic analysis.",
    },
  });

  await prisma.course.upsert({
    where: { slug: "class-10-maths" },
    update: {},
    create: {
      slug: "class-10-maths",
      name: "Class 10 Mathematics",
      mode: "Hybrid",
      duration: "6 Months",
      priceInr: 10000,
      description:
        "Boards-focused foundations, worksheets, and previous year practice.",
    },
  });

  await prisma.blogPost.upsert({
    where: { slug: "neet-prep-strategy-90-days" },
    update: {},
    create: {
      slug: "neet-prep-strategy-90-days",
      title: "NEET: 90-day preparation strategy (with weekly tests)",
      excerpt:
        "A practical revision plan that balances concepts, practice questions, and mocks.",
      bodyMd:
        "## Build a weekly rhythm\nPlan 5 learning days, 1 test day, and 1 review day.\n\n## Use an error log\nTrack mistakes by topic and re-practice targeted sets.\n\n## Full mocks every week\nTreat mocks as training and analyze time spent.",
      status: "PUBLISHED",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

