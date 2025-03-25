document.addEventListener('DOMContentLoaded', async function() {
    const tools = await fetchToolsData();
    displayAllTools(tools);
});

function displayAllTools(tools) {
    const container = document.getElementById('heat-ranking');
    
    // 按热度排序
    const sortedTools = [...tools].sort((a, b) => b.heat - a.heat);
    
    container.innerHTML = sortedTools.map(tool => `
        <div class="tool-card">
            <div class="tool-icon" style="background-color: ${getRandomColor()}">
                <i class="fas ${tool.icon}" style="color: white; font-size: 24px;"></i>
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-meta">
                <span class="heat"><i class="fas fa-fire"></i> ${tool.heat}</span>
                <span class="categories">${tool.categories.map(cat => `<span>${cat}</span>`).join('')}</span>
            </div>
            <a href="${tool.url}" target="_blank" class="visit-button">访问</a>
        </div>
    `).join('');
}
