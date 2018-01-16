import trae from 'trae'
import configService from './config'

const genericService = trae.create({
  baseUrl: configService.apiUrl
})

const carsService = {}

carsService.getCars = function () {
  return genericService.get('/cars')
  .then(function(res){
    return res
  })
}
export default carsService
