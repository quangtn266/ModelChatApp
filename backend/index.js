const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            "http://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "1b281e8a-f2b7-440a-9824-f2ac7a3bd52a" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        //const status = 500;
        //return res.status(status);
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);