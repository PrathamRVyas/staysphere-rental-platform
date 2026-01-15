const Listing = require("../Models/listings")

module.exports.index = async (req,res)=>{
  const allListings = await Listing.find({});
  res.render("listings/index.ejs",{allListings});
};

module.exports.renderNewForm = async(req,res) =>{
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({path:"reviews",
        populate: {
            path: "author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
         return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});
};


module.exports.createListing = async (req,res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing =  new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
};


module.exports.rendereditForm = async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    let originalImgUrl = listing.image.url;
    originalImgUrl = originalImgUrl.replace(
    "/upload",
     "/upload/w_300,h_200,c_fill,ar_1.5/bo_5px_solid_lightblue"
   );

    res.render("listings/edit.ejs",{listing, originalImgUrl});
};


module.exports.updateListing = async(req,res) =>{ 
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing}, {runValidators:true});
    
    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save();
    }

    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};