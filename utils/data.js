import bcrypt from 'bcryptjs';

const data = {
  users: [ {
    name: 'Naira',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  }, {
    name: 'John',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  }],
  products: [
    {
      id: 1,
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 15,
      description: 'A popular shirt'
    },
    {
      id: 2,
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      isFeatured: true,
      featuredImage: '/images/banner2.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 10,
      countInStock: 11,
      description: 'A popular shirt'
    },
    {
      id: 3,
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 90,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 10,
      countInStock: 2,
      description: 'A popular shirt'
    },
    {
      id: 4,
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 90,
      brand: 'Oliver',
      rating: 4.5,
      numReviews: 10,
      countInStock: 12,
      description: 'Smart looking pants'
    },
    {
      id: 5,
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 95,
      brand: 'Zara',
      rating: 4.5,
      numReviews: 10,
      countInStock: 25,
      description: 'A popular pants'
    },
    {
      id: 6,
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/pants3.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 75,
      brand: 'Casely',
      rating: 4.5,
      numReviews: 10,
      countInStock: 17,
      description: 'A popular pants'
    }
  ]
};
export default data;
