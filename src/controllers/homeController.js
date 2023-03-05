const getHomepage = (req, res) => {
    res.send('Hello arld! toi la duy nguyen')
}

const getViews = (req, res) => {
    res.render('example.ejs')
}

module.exports = { getHomepage, getViews }