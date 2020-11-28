import React from 'react';
import CategorySelectionForm from "./CategorySelectionForm";

const CategorySelection = () => {
    return (  
        <div className="settingsSelectionSection">
            <div className="settingsSelectionSectionTitle">
                Choose Your Settings
            </div>
            <CategorySelectionForm />
        </div>
    );
}
 
export default CategorySelection;