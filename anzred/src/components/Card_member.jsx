function CardMember({CardMemberData}) {
    return(
        <div className="Card_member">
            <img src={CardMemberData.image} alt={CardMemberData.image} className="Card_member_image" />
            <h3 className="Card_member_name">{CardMemberData.personne}</h3>
            <p className="Card_member_position">{CardMemberData.position}</p>
        </div>
    );
}

export default CardMember;