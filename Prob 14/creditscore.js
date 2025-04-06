<script>
const ctx = document.getElementById('creditScoreGauge').getContext('2d');
const gaugeChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Poor', 'Fair', 'Good', 'Excellent'],
    datasets: [{
      data: [160, 120, 120, 110], // Segment sizes (sum should be 510 for 300-850)
      backgroundColor: ['#dc2626', '#facc15', '#4ade80', '#22c55e'],
      borderWidth: 0,
      cutout: '75%',
      rotation: -90,
      circumference: 180
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  }
});
</script>
