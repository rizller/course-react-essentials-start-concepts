export default function Tabs({children, buttons, ButtonsContainer = 'menu'}) {
    //menu is the default value if no value is passed in the prop
    return(
        <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
        </>
    );
}