// user id 1035580585
async function sendData() {
    //let user = document.getElementById('user').value;
    let user = "amichaiberger"
    let id 

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", await function () {
        if (this.readyState === this.DONE) {
            id = (this.responseText);
            console.log(id);
        }
    });

    xhr.open("GET", `https://instagram39.p.rapidapi.com/getUserId?username=${user}`);
    xhr.setRequestHeader("x-rapidapi-key", "3f4b6a1089msh03de9a7e44c4095p1bfbb9jsnc3f17936c7c9");
    xhr.setRequestHeader("x-rapidapi-host", "instagram39.p.rapidapi.com");

    xhr.send(data);
    let followers = getfollowers(id)
    let following = getfolloing(id)
    console.log(followers);
   
}
function getfollowers(id) {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            return JSON.parse(this.responseText);
        }
    });

    xhr.open("GET", `https://instagram39.p.rapidapi.com/getFollowers?user_id=${id}`);
    xhr.setRequestHeader("x-rapidapi-key", "3f4b6a1089msh03de9a7e44c4095p1bfbb9jsnc3f17936c7c9");
    xhr.setRequestHeader("x-rapidapi-host", "instagram39.p.rapidapi.com");

    xhr.send(data);

}
function getfolloing(id) {
    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		return JSON.parse(this.responseText);
	}
});

xhr.open("GET", `https://instagram39.p.rapidapi.com/getFollowing?user_id=${id}`);
xhr.setRequestHeader("x-rapidapi-key", "3f4b6a1089msh03de9a7e44c4095p1bfbb9jsnc3f17936c7c9");
xhr.setRequestHeader("x-rapidapi-host", "instagram39.p.rapidapi.com");

xhr.send(data);
}
let info =`{"success": true, "data": {"count": 184, "page_info": {"has_next_page": true, "end_cursor": "QVFBMHREeUtreld5dFBhQi1HMkZIbE5uRFdCZFNBTVY0azVkZG8wWTFhb2tUUFFRT1Mxa3BmMExrRDd4di1qdE13RlE2dFoyTkZPRHlSMmNPa29VeF8ydA=="}, "edges": [{"node": {"id": "44506702534", "username": "yishai_sperling", "full_name": "\u05d9\u05e9\u05d9 \u05e1\u05e4\u05e8\u05dc\u05d9\u05e0\u05d2", "profile_pic_url": "https://instagram.fkul6-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkul6-1.fna.fbcdn.net&_nc_ohc=gj0BNZ18uiEAX9G5Bqd&oh=b0bca98d2a1c0391d8a43b462bd3f6a5&oe=6063DB0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "44506702534", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "44506702534", "profile_pic_url": "https://instagram.fkul6-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkul6-1.fna.fbcdn.net&_nc_ohc=gj0BNZ18uiEAX9G5Bqd&oh=b0bca98d2a1c0391d8a43b462bd3f6a5&oe=6063DB0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2", "username": "yishai_sperling"}}}}, {"node": {"id": "6007599010", "username": "avi_adon", "full_name": "\u05d0\u05d1\u05d9\u05e2\u05d3 \u05d3\u05d5\u05df", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/21372922_341200246304695_9050983963832614912_a.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=cUEahU5eXk8AX8i1IPB&oh=ceac37215993da43d55a990cadcb216e&oe=60656E79", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "6007599010", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "6007599010", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/21372922_341200246304695_9050983963832614912_a.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=cUEahU5eXk8AX8i1IPB&oh=ceac37215993da43d55a990cadcb216e&oe=60656E79", "username": "avi_adon"}}}}, {"node": {"id": "4153035752", "username": "temimaberger", "full_name": "", "profile_pic_url": "https://instagram.fkul6-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkul6-1.fna.fbcdn.net&_nc_ohc=gj0BNZ18uiEAX9G5Bqd&oh=b0bca98d2a1c0391d8a43b462bd3f6a5&oe=6063DB0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "4153035752", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "4153035752", "profile_pic_url": "https://instagram.fkul6-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkul6-1.fna.fbcdn.net&_nc_ohc=gj0BNZ18uiEAX9G5Bqd&oh=b0bca98d2a1c0391d8a43b462bd3f6a5&oe=6063DB0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2", "username": "temimaberger"}}}}, {"node": {"id": "3144683193", "username": "oriya_liphshitz", "full_name": "Oriya Liphshitz", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/71697464_1469312686559659_4101127411817512960_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=7CMqXJU8emwAX9uPvq_&oh=6d7e0ced75e45fe5763773db0e161a84&oe=60632BCD", "is_private": false, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "3144683193", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": 0, "seen": null, "owner": {"__typename": "GraphUser", "id": "3144683193", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/71697464_1469312686559659_4101127411817512960_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=7CMqXJU8emwAX9uPvq_&oh=6d7e0ced75e45fe5763773db0e161a84&oe=60632BCD", "username": "oriya_liphshitz"}}}}, {"node": {"id": "9476376537", "username": "shminiit_dnpt", "full_name": "Shminit D.N.P.T", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/52739852_373111656858804_1426311626289577984_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=qKecPOuhYnoAX-b_AVE&oh=78800d7aa7ca3cc84c472cf98167aef1&oe=60637014", "is_private": false, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "9476376537", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": 0, "seen": null, "owner": {"__typename": "GraphUser", "id": "9476376537", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/52739852_373111656858804_1426311626289577984_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=qKecPOuhYnoAX-b_AVE&oh=78800d7aa7ca3cc84c472cf98167aef1&oe=60637014", "username": "shminiit_dnpt"}}}}, {"node": {"id": "6333316117", "username": "boaz.sand", "full_name": "boaz sandorffy", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/93382599_992522471144378_1295704127539511296_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=7CgsPoSaChgAX8uW3k6&oh=6c95cb452be147fb46c32e5c97d38cd3&oe=60635781", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "6333316117", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "6333316117", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/93382599_992522471144378_1295704127539511296_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=7CgsPoSaChgAX8uW3k6&oh=6c95cb452be147fb46c32e5c97d38cd3&oe=60635781", "username": "boaz.sand"}}}}, {"node": {"id": "3273178762", "username": "orishavit100", "full_name": "ori 123456", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/139894405_245877266903334_6413000698254440660_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=YQ8GpUs9Xq0AX89ko8L&oh=713a7cbf759a58d91d1e3d42f0bdd4ef&oe=60647524", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "3273178762", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "3273178762", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/139894405_245877266903334_6413000698254440660_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=YQ8GpUs9Xq0AX89ko8L&oh=713a7cbf759a58d91d1e3d42f0bdd4ef&oe=60647524", "username": "orishavit100"}}}}, {"node": {"id": "3512780648", "username": "noam_green9", "full_name": "noamgreen", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/119439620_239665517437606_6780951555312731974_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=1P4rp4xQrBQAX8Vfafk&oh=07604416fbf9c9176a4d5e0ec1d2cce7&oe=6062F717", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "3512780648", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "3512780648", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/119439620_239665517437606_6780951555312731974_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=1P4rp4xQrBQAX8Vfafk&oh=07604416fbf9c9176a4d5e0ec1d2cce7&oe=6062F717", "username": "noam_green9"}}}}, {"node": {"id": "44523459730", "username": "noanissim572", "full_name": "noanissim", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/128431039_1251037915276369_5482690225483872303_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=11rMWMws6zMAX-vjII5&oh=e7dc9366d7e29a2fba7ac9ca8b582310&oe=606601FB", "is_private": false, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "44523459730", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": 0, "seen": null, "owner": {"__typename": "GraphUser", "id": "44523459730", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/128431039_1251037915276369_5482690225483872303_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=11rMWMws6zMAX-vjII5&oh=e7dc9366d7e29a2fba7ac9ca8b582310&oe=606601FB", "username": "noanissim572"}}}}, {"node": {"id": "6772993111", "username": "yohay_135", "full_name": "\u05d9\u05d5\u05d7\u05d0\u05d9 \u05de\u05e2\u05d1\u05e8\u05d9", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/25009294_340648813011731_4828690589677518848_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=p_QyruPk9cgAX-HysHB&oh=8b2aeade4658d13bd7a68881c7a41dd0&oe=606253C4", "is_private": false, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "6772993111", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": 0, "seen": null, "owner": {"__typename": "GraphUser", "id": "6772993111", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/25009294_340648813011731_4828690589677518848_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=p_QyruPk9cgAX-HysHB&oh=8b2aeade4658d13bd7a68881c7a41dd0&oe=606253C4", "username": "yohay_135"}}}}, {"node": {"id": "8469985799", "username": "developers.institute", "full_name": "Developers.Institute \ud83c\uddee\ud83c\uddf1", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/101847620_593319288263810_5220369118623956992_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=54JV11vQnFcAX9NWhf6&oh=15f6252eddac54a0765af54fa65a71d2&oe=60652FC0", "is_private": false, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "8469985799", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": 0, "seen":
 null, "owner": {"__typename": "GraphUser", "id": "8469985799", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/101847620_593319288263810_5220369118623956992_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=54JV11vQnFcAX9NWhf6&oh=15f6252eddac54a0765af54fa65a71d2&oe=60652FC0", "username": "developers.institute"}}}}, {"node": {"id": "828226341", "username": "carmelashery", "full_name": "\u00a2 \u03b1 \u044f \u043c \u0454 \u2113  \u03b1 \u0455 \u043d\u0454 \u044f \u0443", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/29096190_210022179746877_5753254915153592320_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=hbb_scRpZ5MAX_M_pyZ&oh=3b9599e9be073b17d12d730bfc993bd7&oe=6064F834", "is_private": false, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "828226341", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": 1614372772, "seen": null, "owner": {"__typename": "GraphUser", "id": "828226341", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/29096190_210022179746877_5753254915153592320_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=hbb_scRpZ5MAX_M_pyZ&oh=3b9599e9be073b17d12d730bfc993bd7&oe=6064F834", "username": "carmelashery"}}}}, {"node": {"id": "1590046392", "username": "shaked_avrahami", "full_name": "\ud835\udc2c\ud835\udc21\ud835\udc1a\ud835\udc24\ud835\udc1e\ud835\udc1d \ud835\udc1a\ud835\udc2f\ud835\udc2b\ud835\udc1a\ud835\udc21\ud835\udc1a\ud835\udc26\ud835\udc22 \u2022 \u05e9\u05e7\u05d3 \u05d0\u05d1\u05e8\u05d4\u05de\u05d9", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/134084673_153849906521129_7785694488415244113_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=GMFPKAVJUDsAX8dGFSK&oh=30e439996c876c4e608e5b66f49a4257&oe=6062DB6A", "is_private": false, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "1590046392", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": 0, "seen": null, "owner": {"__typename": "GraphUser", "id": "1590046392", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/134084673_153849906521129_7785694488415244113_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=GMFPKAVJUDsAX8dGFSK&oh=30e439996c876c4e608e5b66f49a4257&oe=6062DB6A", "username": "shaked_avrahami"}}}}, {"node": {"id": "6797504335", "username": "achiya53", "full_name": "A.s53", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/115987650_975630392871885_7912787183391146272_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=HlY4txrPID4AX-s-Yf_&oh=35b05c92b933439ebf8e88682fe988e0&oe=606461E4", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "6797504335", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "6797504335", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/115987650_975630392871885_7912787183391146272_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=HlY4txrPID4AX-s-Yf_&oh=35b05c92b933439ebf8e88682fe988e0&oe=606461E4", "username": "achiya53"}}}}, {"node": {"id": "8026098854", "username": "dvir_shmilovitz", "full_name": "\u05d3\u05d1\u05d9\u05e8 \u05e9\u05de\u05d9\u05dc\u05d5\u05d1\u05d9\u05e5", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/122737990_115370403687716_4921556791852538287_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=lBQ3NsDWScQAX-RgT_z&oh=ea903e1c6c86853da1ea313b0b9e8b71&oe=6065852D", "is_private": false, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "8026098854", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": 0, "seen": null, "owner": {"__typename": "GraphUser", "id": "8026098854", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/122737990_115370403687716_4921556791852538287_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=lBQ3NsDWScQAX-RgT_z&oh=ea903e1c6c86853da1ea313b0b9e8b71&oe=6065852D", "username": "dvir_shmilovitz"}}}}, {"node": {"id": "16005795736", "username": "nadav_chan", "full_name": "nadav", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/123264349_351347316145940_3469148656695552146_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=f561roGkB7IAX9k7HTk&oh=2c6b12cb851151d4cd8fa362a96a1cf0&oe=6063A68B", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "16005795736", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "16005795736", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/123264349_351347316145940_3469148656695552146_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=f561roGkB7IAX9k7HTk&oh=2c6b12cb851151d4cd8fa362a96a1cf0&oe=6063A68B", "username": "nadav_chan"}}}}, {"node": {"id": "6133661837", "username": "avisahy14", "full_name": "\u05d0\u05d1\u05d9\u05e9\u05d9 \u05e9\u05de\u05d9\u05e8", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/130115618_724833741571828_269207480098313920_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=vecmg7T30TgAX9GmNL_&oh=9015115ff04071817730bac2b02a0463&oe=6064C996", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "6133661837", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "6133661837", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/130115618_724833741571828_269207480098313920_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=vecmg7T30TgAX9GmNL_&oh=9015115ff04071817730bac2b02a0463&oe=6064C996", "username": "avisahy14"}}}}, {"node": {"id": "6005197508", "username": "barel0586884", "full_name": "nethanel barel", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/64980491_454613935095900_8430250387994312704_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=UBoO3kJnf00AX-wly0U&oh=ae01265bdacdb17b826558d8bccb6e40&oe=60626FDB", "is_private": false, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "6005197508", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": 0, "seen": null, "owner": {"__typename": "GraphUser", "id": "6005197508", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/64980491_454613935095900_8430250387994312704_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=UBoO3kJnf00AX-wly0U&oh=ae01265bdacdb17b826558d8bccb6e40&oe=60626FDB", "username": "barel0586884"}}}}, {"node": {"id": "4209707041", "username": "davidchalamish", "full_name": "\u05d3\u05d5\u05d3 \u05d7\u05dc\u05de\u05d9\u05e9", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/59872328_328980901151615_1070039420456927232_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=-qPXy3oyz1MAX96ouI1&oh=12da6aa83976a3a6dc198b3c239b0014&oe=60643FB0", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "4209707041", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "4209707041", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/59872328_328980901151615_1070039420456927232_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=-qPXy3oyz1MAX96ouI1&oh=12da6aa83976a3a6dc198b3c239b0014&oe=60643FB0", "username": "davidchalamish"}}}}, {"node": {"id": "44709397736", "username": "aryhplhyymr", "full_name": "\u05d0\u05e8\u05d9\u05d4 \u05d0\u05e1\u05d3 \u05e4\u05dc\u05d4\u05d9\u05d9\u05de\u05e8", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/127827096_2721696804761957_6146652675483331129_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=bJpnsopLj5EAX-tXWFT&oh=44d37ca1a3874e51bfe5320105e7887f&oe=6064C6FC", "is_private": false, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "44709397736", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": 0, "seen": null, "owner": {"__typename": "GraphUser", "id": "44709397736", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/127827096_2721696804761957_6146652675483331129_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=bJpnsopLj5EAX-tXWFT&oh=44d37ca1a3874e51bfe5320105e7887f&oe=6064C6FC", "username": "aryhplhyymr"}}}}, {"node": {"id": "43048394869", "username": "yakov.bitan", "full_name": "\u05d9\u05e2\u05e7\u05d1 \u05d1\u05d9\u05d8\u05df", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/120392747_180882640170946_7103645830917419411_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=cMfZ_TfK4M8AX9kybDE&oh=8aaa41659d978590bc0d5c58e4e3668c&oe=60621B04", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "43048394869", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "43048394869", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/120392747_180882640170946_7103645830917419411_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=cMfZ_TfK4M8AX9kybDE&oh=8aaa41659d978590bc0d5c58e4e3668c&oe=60621B04", "username": "yakov.bitan"}}}}, {"node": {"id": "1690264187", "username": "ziv_noyge", "full_name": "\u05d6\u05d9\u05d5 \u05e0\u05d5\u05d9\u05d2\u05d1\u05d5\u05e8\u05df", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/15876772_
 234536370325281_3965257706251485184_a.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=hRoxdeRbPecAX_-7Teb&oh=4dda5d92965c4079e1816440d4315e27&oe=60626A1C", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "1690264187", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "1690264187", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/15876772_234536370325281_3965257706251485184_a.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=hRoxdeRbPecAX_-7Teb&oh=4dda5d92965c4079e1816440d4315e27&oe=60626A1C", "username": "ziv_noyge"}}}}, {"node": {"id": "39524543306", "username": "shay_sagzan", "full_name": "Shay Sagzan", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/125206636_1033189763866347_6611529715448221560_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=s1cwYmGAeNYAX_nnbnf&oh=8224ce648b9a90b56a1b41712a6ee406&oe=6062E884", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "39524543306", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "39524543306", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/125206636_1033189763866347_6611529715448221560_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=s1cwYmGAeNYAX_nnbnf&oh=8224ce648b9a90b56a1b41712a6ee406&oe=6062E884", "username": "shay_sagzan"}}}}, {"node": {"id": "36006870", "username": "naorkanizo", "full_name": "\u05e0\u05d0\u05d5\u05e8 \u05e7\u05e0\u05d9\u05d6\u05d5 \ud83d\ude09", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/70600596_1179076362294874_6788763923832111104_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=PWD1MRCTSOMAX-7fggU&oh=6c9bfd37764c9c42f5616874aafa01e3&oe=606507B5", "is_private": true, "is_verified": false, "followed_by_viewer": false, "requested_by_viewer": false, "reel": {"id": "36006870", "expiring_at": 1614535881, "has_pride_media": false, "latest_reel_media": null, "seen": null, "owner": {"__typename": "GraphUser", "id": "36006870", "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/s150x150/70600596_1179076362294874_6788763923832111104_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_ohc=PWD1MRCTSOMAX-7fggU&oh=6c9bfd37764c9c42f5616874aafa01e3&oe=606507B5", "username": "naorkanizo"}}}}]}}`
