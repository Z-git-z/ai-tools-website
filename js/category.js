document.addEventListener('DOMContentLoaded', async function() {
    const tools = await fetchToolsData();
    let currentCategory = 'all';
    let currentSort = 'heat';
    
    // 初始化显示
    displayTools(getFilteredAndSortedTools(tools, currentCategory, currentSort));
    
    // 分类按钮事件
    document.querySelectorAll('.category-filter button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.category-filter button').forEach(btn => 
                btn.classList.remove('active'));
            this.classList.add('active');
            
            currentCategory = this.dataset.category;
            displayTools(getFilteredAndSortedTools(tools, currentCategory, currentSort));
        });
    });
    
    // 排序按钮事件
    document.querySelectorAll('.sort-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.sort-btn').forEach(btn => 
                btn.classList.remove('active'));
            this.classList.add('active');
            
            currentSort = this.dataset.sort;
            displayTools(getFilteredAndSortedTools(tools, currentCategory, currentSort));
        });
    });
});

function getFilteredAndSortedTools(tools, category, sortBy) {
    // 筛选
    let filteredTools = category === 'all' 
        ? [...tools] 
        : tools.filter(tool => tool.categories.includes(category));
    
    // 排序
    return filteredTools.sort((a, b) => {
        if (sortBy === 'heat') return b.heat - a.heat;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
    });
}

function displayTools(tools) {
    const container = document.getElementById('category-results');
    
    if (tools.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-circle fa-3x"></i>
                <p>该分类下暂无工具</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = tools.map(tool => `
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
