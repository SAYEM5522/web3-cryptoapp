import Image from 'next/image'
import React from 'react'
import styles from "../../NftCss/Feed/Nft/NftCollection.module.css"
const NftCollection = () => {
  return (
      <div className={styles.NftCollectionFeed}>
          <div className={styles.NftCollectionFeed_Top}>
            <div style={{"marginLeft":"12px"}}>
            <Image
                 src={"https://lh3.googleusercontent.com/20749ie-OQXjwxzOuvTyeUD8y8zc34PHhLyZUxWBY5UQKh15jGw8JwtpAtrppXhDmuRgPHabG9KxnpFV7UnMEFmtLC0pttrWGxNAFw=s120"}
                 width={35}
                  height={35}
                  alt="nft"
                  objectFit='cover'
                  className='Gainer_Image'
                  />
                  </div>
            <div className={styles.NftCollectionFeed_Top_Des}>
              <h4>Creator</h4>
              <p>@ritual</p>
            </div>
          </div>
          <div className={styles.NftCollectionFeed_Middle}>
          <Image
                 src={"https://www.fivesquid.com/pics/t2/1637855541-187495-2-1.jpg"}
                 width={700}
                  height={500}
                  alt="nft"
                  objectFit='cover'
                  />
          </div>
          <div className={styles.NftCollectionFeed_Bottoms}></div>

      </div>
  )
}

export default NftCollection