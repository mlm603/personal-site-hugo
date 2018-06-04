$(document).ready(function() {
    newpic();
});

function newpic() {
    var pics = ["https://cloud.githubusercontent.com/assets/13624950/26039227/172f31e4-38e6-11e7-88ec-377a3c64b029.png",
        "https://cloud.githubusercontent.com/assets/13624950/26039223/172b9da4-38e6-11e7-9ebc-d83bbbff681d.jpeg",
        "https://cloud.githubusercontent.com/assets/13624950/26039226/172e3636-38e6-11e7-85dd-d5a85f8b40ba.jpeg",
        "https://cloud.githubusercontent.com/assets/13624950/26039222/17298938-38e6-11e7-9085-38dad3ed18bd.jpeg",
        "https://cloud.githubusercontent.com/assets/13624950/26039224/172be994-38e6-11e7-955b-2fd1b120b39d.jpeg",
        "https://cloud.githubusercontent.com/assets/13624950/26039225/172c5dde-38e6-11e7-8944-ba59788f362b.jpeg",
        "https://cloud.githubusercontent.com/assets/13624950/26039575/652a4a2e-38ea-11e7-9234-6737469b2bee.jpeg"
    ]
    var randnum = Math.round(Math.random() * pics.length, 0);
    $("#evimg img").attr("src", pics[randnum]);
}
function newpicans(){
    alert ("wrong")
    newpic()
}