
//Modal advertiser
type Advertiser = {
  id: Number,
  avatarUrl: String,
  campaignName: String,
  campaignUrl: String,
  category: String,
  clicklessTracking: Boolean,
  commissionApproval: String,
  commissionRate: String,
  commissionType: String,
  cookieLength: String,
  description: String,
  internationShipping: Boolean,
  mobileWebsite: Boolean,
  profileFacebook: String,
  profileInstagram: String,
  profileTwitter: String,
  similarAdvertisers: [Number],
  summary: String,
  targetMarket: String,
}

export default Advertiser