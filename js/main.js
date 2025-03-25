// 工具数据URL
const TOOLS_DATA_URL = 'data/tools.json';

// 获取随机颜色（用于工具图标背景）
function getRandomColor() {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FF9E7D', 
        '#A37BFC', '#0F2C3D', '#FF3E80', '#00C4CC', 
        '#5F27CD', '#6ECB63', '#FFA502', '#2ED573'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 加载工具数据
async function fetchToolsData() {
    try {
        const response = await fetch(TOOLS_DATA_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching tools data:', error);
        return [];
    }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 可以在这里添加全局初始化逻辑
});
