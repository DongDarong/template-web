        // Show selected category
        function showCategory(category) {
            const itemsSection = document.getElementById('items');
            const categoryTitle = document.getElementById('category-title');
            const categoryImage = document.getElementById('category-image');
            const selectedCategoryImageSection = document.getElementById('selected-category-image');

            // Hide all items initially
            document.querySelectorAll('.item-group').forEach(group => group.style.display = 'none');

            // Set category title and image
            categoryTitle.innerText = category.charAt(0).toUpperCase() + category.slice(1);
            categoryImage.src = `images/${category}.jpg`; // Example image for the category
            selectedCategoryImageSection.style.display = 'block';

            // Show items of selected category
            document.getElementById(category).style.display = 'flex';
            itemsSection.style.display = 'block';
        }

        // Show item details in modal
        function showDetails(item) {
            const modal = document.getElementById('item-modal');
            const itemTitle = document.getElementById('item-title');
            const itemDescription = document.getElementById('item-description');
            const itemImage = document.getElementById('item-image');

            // Set item details based on selection
            switch (item) {
                case 'hammer':
                    itemTitle.innerText = 'Hammer';
                    itemDescription.innerText = 'A hammer is a hand tool used to drive nails into, or pull nails from, some other object.';
                    itemImage.src = 'images/hammer.jpg';
                    break;
                case 'drill':
                    itemTitle.innerText = 'Drill';
                    itemDescription.innerText = 'A drill is a tool used to make round holes or drive fasteners.';
                    itemImage.src = 'images/drill.jpg';
                    break;
                case 'vase':
                    itemTitle.innerText = 'Vase';
                    itemDescription.innerText = 'A vase is an open container used to hold flowers.';
                    itemImage.src = 'images/vase.jpg';
                    break;
                case 'frame':
                    itemTitle.innerText = 'Picture Frame';
                    itemDescription.innerText = 'A picture frame is a container for a picture or photograph.';
                    itemImage.src = 'images/frame.jpg';
                    break;
                case 'soil':
                    itemTitle.innerText = 'Soil';
                    itemDescription.innerText = 'Soil is the upper layer of earth in which plants grow.';
                    itemImage.src = 'https://avantilandscaping.ca/wp-content/uploads/2022/10/avanti-backyard-design-5.jpg';
                    break;
                case 'plant':
                    itemTitle.innerText = 'Plant';
                    itemDescription.innerText = 'A plant is a living organism that grows in the ground or in water.';
                    itemImage.src = 'images/plant.jpg';
                    break;
                case 'paint':
                    itemTitle.innerText = 'Paint';
                    itemDescription.innerText = 'Paint is a liquid substance used to cover surfaces with color.';
                    itemImage.src = 'images/paint.jpg';
                    break;
                case 'brush':
                    itemTitle.innerText = 'Brush';
                    itemDescription.innerText = 'A brush is a tool with bristles used for painting or cleaning.';
                    itemImage.src = 'images/brush.jpg';
                    break;
                case 'fridge':
                    itemTitle.innerText = 'Fridge';
                    itemDescription.innerText = 'A fridge is an appliance for keeping food and drinks cold.';
                    itemImage.src = 'images/fridge.jpg';
                    break;
                case 'oven':
                    itemTitle.innerText = 'Oven';
                    itemDescription.innerText = 'An oven is a kitchen appliance used for baking or roasting.';
                    itemImage.src = 'images/oven.jpg';
                    break;
            }

            // Display the modal
            modal.style.display = 'flex';
        }

        // Close the modal
        function closeModal() {
            const modal = document.getElementById('item-modal');
            modal.style.display = 'none';
        }

        // Close modal on clicking outside of modal content
        window.onclick = function(event) {
            const modal = document.getElementById('item-modal');
            if (event.target === modal) {
                closeModal();
            }
        }