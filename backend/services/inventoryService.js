import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const inventoryService = async (inventoryData) => {


  return await new Promise((resolve, reject) => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const pythonScriptPath = `${__dirname}/../analysis/analysis.py`;

    const process = spawn('python3', [pythonScriptPath]);

    let output = '';
    let errorOutput = '';

    process.stdout.on('data', (data) => {
      output += data.toString();
    });

    process.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    process.on('close', (code) => {
      if (code === 0) {
        try {
          resolve(JSON.parse(output));
        } catch (parseError) {
          reject(new Error('Failed to parse JSON from Python script output'));
        }
      } else {
        reject(new Error(`Python script exited with code ${code}. Error: ${errorOutput}`));
      }
    });

    process.stdin.write(JSON.stringify(inventoryData));
    process.stdin.end();
  });
};

export default inventoryService;
