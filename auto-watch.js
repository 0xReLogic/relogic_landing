const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('🚀 ReLogic Auto-Watcher Started');
console.log('Watching for file changes...\n');

const projectPath = process.cwd();
const ignoredPaths = ['.git', 'node_modules', '.github'];

// Watch for file changes
fs.watch(projectPath, { recursive: true }, (eventType, filename) => {
    if (filename && !ignoredPaths.some(ignored => filename.includes(ignored))) {
        console.log(`📝 File changed: ${filename}`);
        
        // Debounce to avoid multiple rapid commits
        clearTimeout(global.updateTimer);
        global.updateTimer = setTimeout(() => {
            autoCommitAndPush(filename);
        }, 3000); // Wait 3 seconds for more changes
    }
});

function autoCommitAndPush(changedFile) {
    const timestamp = new Date().toLocaleString();
    const commitMessage = `🔄 Auto-update: Modified ${changedFile} - ${timestamp}`;
    
    console.log('🚀 Auto-committing changes...');
    
    exec('git add .', (error) => {
        if (error) {
            console.error('❌ Error adding files:', error);
            return;
        }
        
        exec(`git commit -m "${commitMessage}"`, (error) => {
            if (error) {
                console.log('ℹ️  No changes to commit');
                return;
            }
            
            console.log('✅ Changes committed');
            
            exec('git push origin main', (error) => {
                if (error) {
                    console.error('❌ Error pushing to GitHub:', error);
                    return;
                }
                
                console.log('🌐 Successfully pushed to GitHub!');
                console.log('🔗 Check: https://github.com/0xReLogic/relogic-landing');
                console.log('🌐 Live Demo: https://0xrelogic.github.io/relogic-landing\n');
            });
        });
    });
}

// Handle process termination
process.on('SIGINT', () => {
    console.log('\n👋 Auto-watcher stopped');
    process.exit(0);
});

console.log('Press Ctrl+C to stop watching...');