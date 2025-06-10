// this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)
let username = "cyberdemon"; // <<<--- Insert your username here!

(async () => {
    try {
        const request = await fetch(`https://nekoweb.org/api/site/info/${username}`,);
        const json = await request.json();

        const updated = new Date(json.updated_at).toLocaleDateString(); // Formats Last Updated text
        const created = new Date(json.created_at).toLocaleDateString(); // Formats Creation Date text

        if (document.getElementById("created")) document.getElementById("created").innerHTML = `<mark>Created:</mark> ${created}`;
        if (document.getElementById("updated")) document.getElementById("updated").innerHTML = `<mark>Updated:</mark> ${updated}`;
        if (document.getElementById("visitors")) document.getElementById("visitors").innerHTML = `<mark>Visits:</mark> ${json.views}`;
        if (document.getElementById("followers")) document.getElementById("followers").innerHTML = `<mark>Followers:</mark> ${json.followers}`;
    } catch (error) {
        console.error(error);
        // If you wish to insert some fallback here, you may do so!
    }
})();
