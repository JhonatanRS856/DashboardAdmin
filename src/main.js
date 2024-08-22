// funcion para los nav links del aside

const navLinks = document.querySelectorAll('.aside_link');

navLinks.forEach(a => {
    a.addEventListener('click', () => {
        navLinks.forEach(item => {
            item.classList.remove('active');
        });

        a.classList.add('active');
    });
});


const navFixed = document.getElementById('navFixed');
const abrirMenu = document.getElementById('btnMenu');
const closeMenu = document.getElementById('closeBtn');

abrirMenu.addEventListener('click', () => {
    navFixed.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    navFixed.classList.remove('show');
});

const toggler = document.getElementById('theme-toggler');


toggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-var');

    toggler.querySelector('span:nth-child(1)').classList.toggle('active');
    toggler.querySelector('span:nth-child(2)').classList.toggle('active');
});


//Array de productos


const products = [
    {
        nombre: 'Foldable Mini Drone',
        number: '85631',
        payment: 'Due',
        status: 'pending',
    },
    {
        nombre: 'LARVENDER KF102 Drone',
        number: '36378',
        payment: 'Refunded',
        status: 'declined',
    },
    {
        nombre: 'Ruko F11 Pro Drone',
        number: '49347',
        payment: 'Due',
        status: 'pending',
    },
    {
        nombre: 'Drone with Camera Drone',
        number: '96996',
        payment: 'Paid',
        status: 'delivered',
    },
    {
        nombre: 'GPS 4K Drone',
        number: '22821',
        payment: 'Paid',
        status: 'delivered',
    },
    {
        nombre: 'DJI Air 2S',
        number: '81475',
        payment: 'Due',
        status: 'pending',
    },
    {
        nombre: 'Lozenge Drone',
        number: '00482',
        payment: 'Paid',
        status: 'delivered',
    },
];

//funcion para agregar los productos en  una tabla

const bodyDiv = document.getElementById('tbodyProductos');

function addProducts() {
    bodyDiv.innerHTML = '';

    products.forEach(product => {
        const trDiv = document.createElement('tr');
        trDiv.innerHTML = `
        <td>${product.nombre}</td>
        <td>${product.number}</td>
        <td>${product.payment}</td>
        <td class="status ${product.status}">${product.status}</td>
        <td class="text-color-primary hidden lg:block lg:pt-3">Details</td>
    `;

    bodyDiv.append(trDiv);
    });

}

addProducts(products);