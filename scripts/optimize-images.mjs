import { readdir, rename, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");
const files = (await readdir(publicDir)).filter((file) => file.endsWith(".webp"));

const maxWidths = {
  "hero-bg.webp": 1600,
  "ready-to-publish-img.webp": 1200,
  default: 900,
};

for (const file of files) {
  const filePath = path.join(publicDir, file);
  const tempPath = `${filePath}.tmp`;
  const { size: originalSize } = await stat(filePath);
  const maxWidth = maxWidths[file] ?? maxWidths.default;

  const optimized = await sharp(filePath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toBuffer();

  if (optimized.length < originalSize) {
    await writeFile(tempPath, optimized);
    await unlink(filePath).catch(() => undefined);
    await rename(tempPath, filePath);
    console.log(
      `${file}: ${Math.round(originalSize / 1024)}KB -> ${Math.round(optimized.length / 1024)}KB`,
    );
  } else {
    console.log(`${file}: kept original (${Math.round(originalSize / 1024)}KB)`);
  }
}
