'use strict'

const Category = use('App/Model/Category')

class CategorySeeder {
  * run () {
    const categoryNames = [
      'Models', 'Animations', 'Textures'
    ]

    for (let categoryName of categoryNames) {
      const category = new Category()
      category.name = categoryName

      yield category.save()
    }
  }
}

module.exports = CategorySeeder
