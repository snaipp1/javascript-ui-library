import $ from './lib/lib';

$('#first').on('click', ()=> {
    $('div').eq(1).fadeToggle(800);
});
$('[data-count="second"]').on('click', ()=> {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: ' quod consequatur dignissimos nobis rem, assumenda explicabo saepe labore nisi, commodi eligendi architecto dolorem cupiditate ullam optio? In accusantium fugiat molestias.'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success', 'mr-10'],
                false,
                () => {
                    alert('Data has been save');
                }
            ],
            [
                'Test',
                ['btn-primary', 'ml-10'],
                false,
                () => {
                    alert('Hello World');
                }
            ]
        ]
    }
}));

$().get('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res))