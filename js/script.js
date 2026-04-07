

document.addEventListener('DOMContentLoaded', () => {

    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    sidebarToggle.addEventListener('click', () => {

        if (window.innerWidth >= 1024) {
            sidebar.classList.toggle('collapsed');
            content.classList.toggle('collapsed');
        }
        else {
            sidebar.classList.toggle('open');
        }
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth < 1024) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            sidebar.classList.remove('open');
        } else {
            sidebar.classList.remove('collapsed');
            content.classList.remove('collapsed');
        }
    });

    const ctx = document.getElementById('salesChart').getContext('2d');

    const colorGridLines = 'rgba(224, 216, 201, 0.4)';
    const colorTextGray = '#5f5c53'; 

    const barColors = [
        '#6b7a42',
        '#8b9d5a',
        '#b05e3f', 
        '#d4a574',
        '#5f5c53', 
        '#3d3b32'  
    ];

    const barHoverColors = [
        '#556233',
        '#76864c',
        '#8e4a31',
        '#bf9163', 
        '#4b4941', 
        '#2a2822'  
    ];

    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Sales',
            data: [40, 60, 90, 70, 120, 150],
            backgroundColor: barColors,
            hoverBackgroundColor: barHoverColors,
            borderRadius: 6,
            borderWidth: 0,
            barThickness: 'flex',
            maxBarThickness: 45
        }]
    };
    const salesConfig = {
        type: 'bar',
        data: salesData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    titleFont: { size: 13, family: 'Inter', weight: '600' },
                    bodyFont: { size: 14, family: 'Inter', weight: 'bold' },
                    padding: 12,
                    cornerRadius: 10,
                    displayColors: false,
                    titleColor: '#8b9d5a'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: colorGridLines,
                        drawBorder: false,
                    },
                    ticks: {
                        font: { family: 'Inter', size: 12 },
                        color: colorTextGray,
                        padding: 10
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        font: { family: 'Inter', size: 12 },
                        color: colorTextGray,
                        padding: 10
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            }
        }
    };
    new Chart(ctx, salesConfig);


    const sidebarLinks = document.querySelectorAll('.sidebar-menu a[data-target]');
    const dashboardViews = document.querySelectorAll('.dashboard-view');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = `view-${link.getAttribute('data-target')}`;


            sidebarLinks.forEach(l => l.parentElement.classList.remove('active'));
            link.parentElement.classList.add('active');


            dashboardViews.forEach(view => view.classList.remove('active'));
            const targetView = document.getElementById(targetId);
            if (targetView) {
                targetView.classList.add('active');
            }


            if (window.innerWidth < 1024) {
                sidebar.classList.remove('open');
            }
        });
    });
});
