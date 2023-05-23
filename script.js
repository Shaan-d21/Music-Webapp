const music = new Audio('audio/6.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Khwab <br><div class="subtitle">Iqlipse Nova and Aditya A</div>`,
        poster: "image/img1.jpg",
    },
    {
        id: 2,
        songName: `Humdard <br><div class="subtitle">Arijit Singh</div>`,
        poster: "image/img2.jpg"
    },
    {
        id: 3,
        songName: `Phir Kabhi <br><div class="subtitle">Arijit Singh & Amaal Malik</div>`,
        poster: "image/img3.jpg"
    },
    {
        id: 4,
        songName: `Tumhe Jo Maine Dekha <br><div class="subtitle">Shreya Ghoshal & Abhijit</div>`,
        poster: "image/img4.jpg"
    },
    {
        id: 5,
        songName: `Ik Vari Aa <br><div class="subtitle">Arijit Singh</div>`,
        poster: "image/img5.jpg"
    },
    {
        id: 6,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "image/img6.jpg"
    },
    {
        id: 7,
        songName: `As It Was <br><div class="subtitle">Harry Styles</div`,
        poster: "image/img7.png"
    },
    {
        id: 8,
        songName: `Heat Wave <br><div class="subtitle">Glass Animals</div>`,
        poster: "image/img8.jpg"
    },
    {
        id: 9,
        songName: `Enemy <br><div class="subtitle">Imagine Dragons</div>`,
        poster: "image/img9.jpeg"
    },
    {
        id: 10,
        songName: `Shape Of You <br><div class="subtitle">Ed Sheeran</div>`,
        poster: "image/img10.png"
    },
    {
        id: 11,
        songName: `Standing By You <br><div class="subtitle">Nish</div>`,
        poster: "image/img11.jpg"
    },
    {
        id: 12,
        songName: `Astronaut in the Ocean <br><div class="subtitle">Masked Wolf</div>`,
        poster: "image/img12.jpg"
    },
    {
        id: 13,
        songName: `Night Changes <br><div class="subtitle">One Direction</div>`,
        poster: "image/img13.jpg"
    },
    {
        id: 14,
        songName: `Love Nwantiti <br><div class="subtitle">CKay</div>`,
        poster: "image/img14.jpg"
    },
    {
        id: 15,
        songName: `Stay <br><div class="subtitle">The Kid LARIO & Justin Bieber</div>`,
        poster: "image/img15.jpg"
    },
    {
        id: 16,
        songName: `Apna Bana Le <br><div class="subtitle">Arijit Singh</div>`,
        poster: "image/img16.jpg"
    },
    {
        id: 17,
        songName: `Tere Hawale <br><div class="subtitle">Arijit Singh & Shilpa Rao</div>`,
        poster: "image/img17.jpg"
    },
    {
        id: 18,
        songName: `Duniya <br><div class="subtitle">Akhil & Dhvani B</div>`,
        poster: "image/img18.jpg"
    },
    {
        id: 19,
        songName: `Tum Se Hi <br><div class="subtitle">Mohit Chauhan</div>`,
        poster: "image/img19.jpg"
    },
    {
        id: 20,
        songName: `Muskurahat <br><div class="subtitle">Mitraz</div>`,
        poster: "image/img20.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.remove('fa-pause');
        el.classList.add('fa-play');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105,105,105,0.0)';
    })
}

let song_side = document.getElementById("before")

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let songTitle = document.getElementById('title');
let songImg = document.getElementById('songImg')
let songText = document.getElementsByClassName('songText')[0];


Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = songs[index - 1].poster; // Adding Song Image in the Play Bar
        songImg.src = songs[index - 1].poster; // Adding Song Image in the Banner
        songText.innerHTML = songs[index - 1].songName; // Adding song and artist name in the banner
        music.play();
        // Changing Play Pause Icon
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        songTitle.innerHTML = songs[index - 1].songName; // Adding song Title in the Play bar
        // set side_song::before bg
        song_side.style.setProperty('--boxBeforeBg', `url(${songs[index - 1].poster})`);

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
        makeAllPlays();
        el.target.classList.add('fa-pause');
        el.target.classList.remove('fa-play');
        wave.classList.add('active1');
    })


});

// Music Current Playtime and Duration
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentEnd.innerText = min1 + ':' + sec1;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    currentStart.innerText = min2 + ':' + sec2;
    // Progress Bar
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-xmark');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.add('fa-volume-low');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-high');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100;
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 220;
})

let back = document.getElementById('back')
let next = document.getElementById('next')

back.addEventListener('click', () => {
    index -= 1;
    if (index <= 0) {
        index = songs.length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = songs[index - 1].poster; // Adding Song Image in the Play Bar
    songImg.src = songs[index - 1].poster; // Adding Song Image in the Banner
    songText.innerHTML = songs[index - 1].songName; // Adding song and artist name in the banner
    music.play();
    // Changing Play Pause Icon
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    console.log(index)
    songTitle.innerHTML = songs[index - 1].songName; // Adding song Title in the Play bar
    // set side_song::before bg
    song_side.style.setProperty('--boxBeforeBg', `url(${songs[index - 1].poster})`);

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
    makeAllPlays();
    el.target.classList.add('fa-pause');
    el.target.classList.remove('fa-play');
    wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index += 1;
    if (index > songs.length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = songs[index - 1].poster; // Adding Song Image in the Play Bar
    songImg.src = songs[index - 1].poster; // Adding Song Image in the Banner
    songText.innerHTML = songs[index - 1].songName; // Adding song and artist name in the banner
    music.play();
    // Changing Play Pause Icon
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    console.log(index)
    songTitle.innerHTML = songs[index - 1].songName; // Adding song Title in the Play bar
    // set side_song::before bg
    song_side.style.setProperty('--boxBeforeBg', `url(${songs[index - 1].poster})`);

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
    makeAllPlays();
    el.target.classList.add('fa-pause');
    el.target.classList.remove('fa-play');
    wave.classList.add('active1');
})

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerText;
    switch (a) {
        case "next":
            shuffle.classList.remove('fa-music');
            shuffle.classList.remove('fa-shuffle');
            shuffle.classList.add('fa-repeat');
            shuffle.innerText = 'repeat';
            break;

        case "repeat":
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.remove('fa-music');
            shuffle.classList.add('fa-shuffle');
            shuffle.innerText = 'random';
            break;

        case "random":
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.remove('fa-shuffle');
            shuffle.classList.add('fa-music');
            shuffle.innerText = 'next';
            break;
    }
});

music.addEventListener('ended', () => {
    if (shuffle.innerText === 'next') {
        next_music();
    }
    else if (shuffle.innerText === 'repeat') {
        repeat_music();
    }
    else {
        random_music();
    }
})

const next_music = () => {
    index++;
    if (index > songs.length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = songs[index - 1].poster; // Adding Song Image in the Play Bar
    songImg.src = songs[index - 1].poster; // Adding Song Image in the Banner
    songText.innerHTML = songs[index - 1].songName; // Adding song and artist name in the banner
    music.play();
    // Changing Play Pause Icon
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    songTitle.innerHTML = songs[index - 1].songName; // Adding song Title in the Play bar
    // set side_song::before bg
    song_side.style.setProperty('--boxBeforeBg', `url(${songs[index - 1].poster})`);

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
    makeAllPlays();
    el.target.classList.add('fa-pause');
    el.target.classList.remove('fa-play');
    wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = songs[index - 1].poster; // Adding Song Image in the Play Bar
    songImg.src = songs[index - 1].poster; // Adding Song Image in the Banner
    songText.innerHTML = songs[index - 1].songName; // Adding song and artist name in the banner
    music.play();
    // Changing Play Pause Icon
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    songTitle.innerHTML = songs[index - 1].songName; // Adding song Title in the Play bar
    // set side_song::before bg
    song_side.style.setProperty('--boxBeforeBg', `url(${songs[index - 1].poster})`);

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
    makeAllPlays();
    el.target.classList.add('fa-pause');
    el.target.classList.remove('fa-play');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index > songs.length) {
        index = 1;
    }
    else {
        index = Math.floor(Math.random() * songs.length) + 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = songs[index - 1].poster; // Adding Song Image in the Play Bar
    songImg.src = songs[index - 1].poster; // Adding Song Image in the Banner
    songText.innerHTML = songs[index - 1].songName; // Adding song and artist name in the banner
    music.play();
    // Changing Play Pause Icon
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    songTitle.innerHTML = songs[index - 1].songName; // Adding song Title in the Play bar
    // set side_song::before bg
    song_side.style.setProperty('--boxBeforeBg', `url(${songs[index - 1].poster})`);

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
    makeAllPlays();
    el.target.classList.add('fa-pause');
    el.target.classList.remove('fa-play');
    wave.classList.add('active1');
}

// Search Bar

let search_results = document.getElementsByClassName('search_results')[0]

songs.forEach(element => {
    const { id, songName, poster } = element;
    // console.log(id);
    let card = document.createElement('a')
    card.classList.add('card');
    card.href = `#${id}`
    card.innerHTML = `<img src="${poster}" alt="">
    <div class="content">
        ${songName}</div>`;

    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let = input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        }
        else {
            items[index].style.display = "none";

        }
        if (input.value == 0) {
            search_results.style.display = "none";
        }
        else {
            search_results.style.display = "";
        }
    }
})