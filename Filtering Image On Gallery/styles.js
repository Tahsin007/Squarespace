/* Gallery Container */
.gallery-container {
    text-align: center;
    padding: 20px;
}

/* Chip Buttons */
.chip-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.chip {
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    background-color: #ddd;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1em;
}

.chip.active,
.chip:hover {
    background-color: #007bff;
    color: #fff;
}

/* Gallery Grid */
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}

.gallery-item {
    width: 23%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s;
    display: block;
    /* Make all items visible by default */
}

.gallery-item:hover {
    transform: scale(1.05);
}

/* Responsive Styles */
@media (max-width: 768px) {
    .chip {
        padding: 8px 15px;
        font-size: 0.9em;
    }

    .gallery-item {
        width: 45%;
    }
}

@media (max-width: 480px) {
    .chip {
        padding: 8px 12px;
        font-size: 0.85em;
    }

    .gallery-item {
        width: 100%;
    }
}
