import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";

import React from 'react'
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {

        return (
            <EmptyState
                title="No Favorites found"
                subtitle="Looks like you have no favorite listing."
            />
        )
    }

    return (
        <FavoritesClient 
          listings={listings}
          currentUser={currentUser}
        />
    )
}

export default ListingPage;