const w = document.getElementById('roles_states_properties').getBoundingClientRect().width,
    h = w / 2.5;

const svg = d3.select('#roles_states_properties').append('svg').attr('width', w).attr('height', h);

svg.append("title")
    .text("Roles, States and Properties")

svg.append("desc")
    .text("A diagram showing the words 'Roles', 'States' and 'Properties' within circles.")


svg.append("text")
    .attr("x", 10)
    .attr("y", 20)
    .text("ARIA is managing roles, states and properties")
    .attr('transform', `translate(20, 20)`);

const data = ['Roles', 'States', 'Properties'];

const group = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("g")
    .attr('transform', (d, i) => `translate(${i * (w / data.length) + ((w / data.length) / 2)}, ${h / 2})`);

group
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", (d, i) => h / 4)
    .attr("stroke", "white")
    .attr("stroke-width", "5")
    .attr("height", 100);

group
    .append("text")
    .attr("x", d => 0)
    .attr("y", d => 0)
    .text(d => d)
    .attr('transform', (d, i) => `translate(-${d.length * 5}, 5)`);