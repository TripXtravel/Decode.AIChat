// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT721 is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter; 

     struct VouchersStruct {
        address owner;
        uint tokenId;
        string name;
        uint256 timestamp;
        string imageUrl;
    }

    struct OffersStruct {
        address owner;
        string offerId;
        uint amount;
        string token;
    }

    VouchersStruct[] vouchers;
    OffersStruct[] offers;

    address constant recipient = 0xd52e51DcBbcb0eD95F55D7e7EC05E91022F6433F; 

    constructor() ERC721("DynamicPackages", "PCK") Ownable(msg.sender) {}

    function mint(address to, string memory tokenURI, string memory imageURI) internal {
        uint256 tokenId = _tokenIdCounter.current(); 
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        vouchers.push(VouchersStruct(to, tokenId, "TripPackage", block.timestamp, imageURI));

        _tokenIdCounter.increment();
    }

    function createOffer(string memory offerId, uint amount) public
    {
        offers.push(OffersStruct(msg.sender, offerId, amount, "CAM"));
    }

    function payPackage(string memory tokenURI, string memory imageURI) public payable
    {
        //check the offer price for the given account
        require(msg.value >= 0, "Insufficient balance in contract");

        mint(msg.sender, tokenURI, imageURI);

        payable(recipient).transfer(msg.value);
    }

    function getAllVouchers() public view returns (VouchersStruct[] memory) {
        return vouchers;
    }

    function getMyVouchers() public view returns (VouchersStruct[] memory) 
    {
        return getMyVouchersInternal(msg.sender);
    }

    function getMyVouchersInternal(address owner) private view returns (VouchersStruct[] memory)  
    {
        uint count = 0;

        for (uint i = 0; i < vouchers.length; i++) {
            if (vouchers[i].owner == owner) {
                count++;
            }
        }

        VouchersStruct[] memory result = new VouchersStruct[](count);
        uint index = 0;

        for (uint i = 0; i < vouchers.length; i++) {
            if (vouchers[i].owner == owner) 
            {
                result[index] = vouchers[i];
                index++;
            }
        }

        return result;
    }
}
