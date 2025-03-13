import fs from "fs";
import path from "path";

const authFile = path.resolve(__dirname, "../../playwright/.auth/user.json");

async function globalTeardown() {
    console.log("🧹 Running global teardown...");

    if (fs.existsSync(authFile)) {
        try {
            console.log("Clearing user.json file...");

            await new Promise((resolve) => setTimeout(resolve, 500));

            fs.writeFileSync(authFile, JSON.stringify({}, null, 2));

            console.log("✅ user.json has been cleared successfully.");
        } catch (error) {
            console.error("❌ Error clearing user.json:", error);
        }
    } else {
        console.log("⚠️ user.json does not exist, skipping teardown.");
    }
}

export default globalTeardown;
