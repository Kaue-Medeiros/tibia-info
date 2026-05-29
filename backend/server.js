const express = require('express');
const cors = require('cors')
const app = express()
const PORT = 3001
app.use(cors())

const BASIC_INFO = {
    'world-honbra': {
            'serverName': 'Honbra',
            'dominantGuild': 'Acesso Negado'
        },
        'world-quelibra': {
            'serverName': 'Quelibra',
            'dominantGuild': 'Daycare'
        },
        'world-tornabra': {
            'serverName': 'Tornabra',
            'dominantGuild': 'Sangreal'
        },
        'world-venebra': {
            'serverName': 'Venebra',
            'dominantGuild': 'venebros'
        }
}



app.get('/api/basic-info', (req, res) => {
    return res.json(BASIC_INFO)
})

app.get('/api/yasir/:world', async (req, res) => {
    try {
        await fetch(`https://tsbot.net/api/world-changes/today?world=${req.params.world}`)
        .then(response => response.json())
        .then(data => {
            res.send(data.changes.Oriental_Trader.active)
        })
    } catch (error) {
        console.log('Error fetching Yasir info:', error);
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})