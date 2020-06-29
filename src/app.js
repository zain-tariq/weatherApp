const express = require('express')
const path = require('path')
const hbs = require('hbs')
const foreCast = require('../public/utils/forecast.js')


const app = express()
const publicDirPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialPath)
app.set('view engine', 'hbs')
app.set('views',viewPath)
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather Application',
        name: 'Zain ul Abideen'
    })
})  

app.get('/about', (req,res) => {
    res.render('about',{
        title: 'About',
        name: 'Zain ul Abideen'
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title: 'Help',
        name: 'Zain ul Abideen'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return{
            error: 'No Address Given!'
        }
    }   
    foreCast(req.query.address, (data) => {
        res.send(data)
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        name:'Zain Ul Abideen',
        title: '404',
        errorMessage: 'Help article not found!'
    })
})

app.get('*', (req,res) => {
    res.render('404',{
        title: '404',
        name:'Zain Ul Abideen',
        errorMessage: 'Page Not Found'
    })
})

app.listen(3000, ()=> {
    console.log('Server is on Bitches!!!')
})
