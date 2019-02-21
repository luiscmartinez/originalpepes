import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Combination_plates from './menu_component/Combination-plates'

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='cta_container'>
      <Combination_plates />
      <ul>
        <li>
          <strong>KIDS MEALS</strong>
          <p>
            Kid Size Beans & Cheese Burrito or Quesadilla, Fries, Drink, & a
            Surprise
          </p>
        </li>
      </ul>
      <h3>* * LUNCH & DINNER * *</h3>
      <h4>A LA CARTE</h4>
      <ul>
        <li>
          <strong>HARD TACOS</strong>{' '}
          <p>Shredded Beef or Shredded Chicken and Lettuce, Cheese & Tomatao</p>
        </li>
        <li>
          <strong>HARD TACOS GUACAMOLE</strong>{' '}
          <p>
            Shredded Beef or Shredded Chicken and Lettuce, Chesses & Guacamole
          </p>
        </li>
        <li>
          <strong>SOFT TACO</strong>{' '}
          <p>
            Your choice of Carne Asada, Carnitas, Chicken, Shredded Beef, Green
            Chile Pork{' '}
          </p>
        </li>
        <li>
          <strong>TWO TAQUITOS</strong>{' '}
          <p>Shredded Beef or Shredded Chicken with Guacamole on top</p>
        </li>
        <li>
          <strong>TOSTADA</strong>{' '}
          <p>Beans, Green Chili, Lettuce, Tomatoes & Cheese</p>
        </li>
        <li>
          <strong>MEAT TOSTADA</strong>{' '}
          <p>
            Shredded Beef, Carne Asada, Chicken, Green Chili, Lettuce &
            Guacamole
          </p>
        </li>
        <li>
          <strong>FLOUR QUESADILLA</strong>{' '}
          <p>
            Green Sauce & Cheese. Add Carne Asada Shredded Beef, Chicken or
            Carnitas
          </p>
        </li>
        <li>
          <strong>CORN QUESADILLA (2)</strong> <p>Green Sauce & Cheese</p>
        </li>
        <li>
          <strong>NACHOS</strong>{' '}
          <p>
            Beans, Green Chili, Cheese & Guacamole (sm or lg) & meat of your
            choice: Shredded Beef, Carne Asada, Chicken, Carnitas, Green Chile
            or Red Chile
          </p>
        </li>
        <li>
          <strong>ENCHILADA</strong> <p>Cheese or Beef with Onions</p>
        </li>
        <li>
          <strong>SIDE OF BEANS & CHEESE</strong>
        </li>
        <li>
          <strong>SIDE OF RICE & GREEN SAUCES</strong>
        </li>
        <li>
          <strong>GUACAMOLE(SMALL OR LARGE)</strong>
          <p>Large size comes with chips included</p>
        </li>
        <li>
          <strong>TORTILLA CHIPS (SMALL OR LARGE)</strong>
        </li>
      </ul>
      <h4>Burritos</h4>
      <ul>
        <li>
          <strong>PEPE'S WET BURRITO</strong>{' '}
          <p>
            Choice of Red or Green Chile, Carnitas, Rice, Beans, Lettuce,
            Guacamole & Chips
          </p>
        </li>
        <li>
          <strong>GREEN CHILE PORK</strong> <p>with beans or all meat</p>
        </li>
        <li>
          <strong>RED CHILE BEEF</strong> <p>with beans or all meat</p>
        </li>
        <li>
          <strong>CHORIZO & BEANS</strong>
        </li>
        <li>
          <strong>BEAN & CHEESE</strong>
        </li>
        <li>
          <strong>CHORIZO & EGG</strong>
          <p>with beans or potatoes</p>
        </li>
        <li>
          <strong>CARNE ASADA, CARNITAS OR CHICKEN</strong>
          <p>with beans & fresh salsa</p>
        </li>
        <li>
          <strong>CHILE RELLENO, GREEN SAUCE & BEANS</strong>
        </li>
        <li>
          <strong>SOFT TOSTADA</strong>
          <p>Beans, Green Sauce, Lettuce & Guacamole</p>
        </li>
        <li>
          <strong>MACHACA & BEANS</strong>
          <p>Shredded Beef, Bell Peppers, Onions, Tomato & Eggs</p>
        </li>
        <li>
          <strong>STEAK PICADO</strong>
          <p>Chopped Steak, Onions, Tomatoes, Bell peppers & Beans</p>
        </li>
      </ul>
      <p>Fresh Salsa Contains: Onions, Tomatoes, Cilantro & Jalapenos</p>
      <p>We can substitute rice for all items with beans at No Extra Charge</p>
      <ul>
        <strong>AT AN EXTRA CHARGE WE WILL: </strong>
        <li>Double Wrap Any Burrito</li>
        <li>
          Add Extra Guacamole, Cheese, Rice, Potatoes, Onions, Lettuces,
          Tomatoes
        </li>
        <li>Bacon on any Item</li>
      </ul>
      <h3>* * BREAKFAST * *</h3>
      <p>SERVED ALL DAY STARTING AT 6AM</p>
      <h4>BREAKFAST BURRITOS</h4>
      <ul>
        <li>
          <strong>BREAKFAST BURRITO</strong>{' '}
          <p>
            Ham, Bacon or Sausage, Eggs, potatoes, Beans, Cheese & Green Sauce
          </p>
        </li>
        <li>
          <strong>PEPE'S BREAKFAST BURRITO</strong>{' '}
          <p>
            Ham, Bacon or Sausage, Eggs, Potatoes, Beans, Cheese, Rice,
            Guacamole & Green Sauce Wet
          </p>
        </li>
        <li>
          <strong>HUEVOS A LA MEXICANA</strong>{' '}
          <p>Eggs, Tomatoes, Bell Peppers, Onions & Beans </p>
        </li>
        <li>
          <strong>CHILAQUILES BURRITO</strong>{' '}
          <p>Eggs, Chips, Onions, Tomatoes, , Green Sauce, Cheese & Beans</p>
        </li>
        <li>
          <strong>MACHACA BURRITO</strong>{' '}
          <p>Eggs, Shredded Beef, Onions, Bell Peppers, Tomatoes & Beans</p>
        </li>
        <li>
          <strong>CHORIZO BURRITO</strong> <p>with Beans</p>
        </li>
        <li>
          <strong>CHORIZO & EGG BURRITO</strong> <p>Beans or potatoes</p>
        </li>
        <li>
          <strong>EGG BURRITO</strong>{' '}
          <p>Beans & Cheese (Ham, Bacon or Sausage, available)</p>
        </li>
      </ul>
      <h4>BREAKFAST PLATES</h4>
      <p>
        ALL PLATES ARE SERVED WITH: <br /> Beans w/Cheese, Rice w/Green Sauce,
        Guacamole & Flour or Corn Tortillas
      </p>
      <ul>
        <li>
          <strong>PEPE'S BREAKFAST PLATE</strong>{' '}
          <p>Ham, Bacon or Sausage, Eggs, Potatoes, Cheese & Green Sauce</p>
        </li>
        <li>
          <strong>CHILAQUILES</strong>{' '}
          <p>Eggs, Chips, Onions, Tomatoes, Green Sauce & Cheese</p>
        </li>
        <li>
          <strong>HUEVOS A LA MEXICANA</strong>{' '}
          <p>Eggs, Onion, Tomatoes & Bell Pepper</p>
        </li>
        <li>
          <strong>CHILAQUILES</strong>{' '}
          <p>Eggs, Chips, Onions, Tomatoes, Green Sauce & Cheese</p>
        </li>
        <li>
          <strong>MACHACA</strong>{' '}
          <p>Eggs, Shredded Beef, Onions, Tomatoes & Bell Peppers</p>
        </li>
        <li>
          <strong>CHORIZO & EGGS</strong> <p>Potatoes available</p>
        </li>
        <li>
          <strong>HUEVOS RANCHEROS</strong>{' '}
          <p>2 Corn Tortillas, Eggs Green Sauce & Cheese</p>
        </li>
      </ul>
      <h4>BREAKFAST A LA CARTE</h4>
      <ul>
        <li>
          <strong>TWO PEPES BREAKFAST TACOS</strong>{' '}
          <p>
            Ham, Bacon or Sausage, Eggs, Potatoes, Beans, Cheese & Green Sauce
          </p>
        </li>
        <li>
          <strong>TWO CHORIZO TACOS</strong> <p>With Beans & Cheese</p>
        </li>
        <li>
          <strong>TWO CHORIZO & EGG TACOS</strong> <p>With Beans & Cheese</p>
        </li>
        <li>
          <strong>TWO CHORIZO EGG & POTATO TACOS</strong>{' '}
          <p>With Beans & Cheese</p>
        </li>
        <li>
          <strong>TWO MACHACA TACOS</strong>{' '}
          <p>Eggs, Shredded Beef, Onions, Bell Pepper & Tomatoes</p>
        </li>
        <li>
          <strong>TWO HUEVOS A LA MEXICANA TACOS</strong>{' '}
          <p>Eggs, Tomatoes, Onions & Bell Pepper</p>
        </li>
        <li>
          <strong>BREAKFAST QUESADILLA</strong>{' '}
          <p>Ham, Bacon or Sausage, Eggs, Potatoes, Green Sauce & Cheese</p>
        </li>
        <li>
          <strong>MACHACA QUESADILLA</strong>{' '}
          <p>
            Eggs, Shredded Beef, Onions, Bell Peppers, Tomatoes, Green Sauce &
            Cheese
          </p>
        </li>
        <li>
          <strong>HUEVOS A LA MEXICANA QUESADILLA</strong>{' '}
          <p>Eggs, Onions, Bell Peppers, Tomatoes, Green Sauce & Cheese</p>
        </li>
        <li>
          <strong>BREAKFAST BOWL</strong>{' '}
          <p>
            Ham, Bacon or Sausage, Eggs, Potatoes, Beans, Rice, Green Sauce,
            Cheese, (Your Choice of Flour or Corn Tortillas)
          </p>
        </li>
        <li>
          <strong>BREAKFAST NACHOS</strong>{' '}
          <p>
            Ham, Bacon or Sausage, Eggs, Potatoes, Beans, Rice, Green Sauce,
            Guacamole & Cheese
          </p>
        </li>
      </ul>

      <Link className='link' to='/catering'>
        View Catering Menu &#8594;
      </Link>
    </div>
  )
}

export default Menu
