const chai = require ('chai')
const { isType } = require('graphql')
const resolvers = require('../../../src/resolvers')
const {expect}=chai

describe('Resolvers / peliculas',()=>
{
    it('debe listar peliculas', async()=>
    {
        const result = await resolvers.Query.peliculas(null,null,null)

        expect(result).to.deep.equal({
            success: true,
            peliculas: [
                {id:1, nombre:'Bambi'},
                {id:2, nombre:'Pesadilla en la calle del infierno'}
            ]
        })
    })
})