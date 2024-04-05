// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract land {
    struct Transaction {
        address from;
        address to;
        uint timestamp;
        string message;
        uint landId; // Added landId to the Transaction struct
    }

    Transaction[] public transactionHistory;

    struct Land {
        uint uniqueId;
        string location;
        uint area;
        address owner;
        uint price;
    }

    Land[] public lands;

    mapping(uint => address) public landOwners;

    event LandAdded(uint uniqueId, address owner, uint price);
    event LandPurchased(uint uniqueId, address buyer, uint price);
    
    modifier onlyOwner(uint _uniqueId) {
        require(msg.sender == lands[_uniqueId].owner, "You are not the owner of this land");
        _;
    }

    function addLand(uint _uniqueId, string memory _location, uint _area, uint _price) external {
        require(landOwners[_uniqueId] == address(0), "Land with this ID already exists");
        lands.push(Land(_uniqueId, _location, _area, msg.sender, _price));
        landOwners[_uniqueId] = msg.sender;
        
        emit LandAdded(_uniqueId, msg.sender, _price);
    }

    function buyLand(uint _uniqueId, string memory _message) external payable {
        require(landOwners[_uniqueId] != address(0), "Land with this ID does not exist");
        require(msg.value >= lands[_uniqueId].price, "Insufficient funds");
        require(msg.sender != lands[_uniqueId].owner, "You are already the owner of this land");
        
        address payable currentOwner = payable(landOwners[_uniqueId]);
        address payable newOwner = payable(msg.sender);
        uint excessPayment = msg.value - lands[_uniqueId].price;
        
        lands[_uniqueId].owner = newOwner;
        landOwners[_uniqueId] = newOwner;
        
        transactionHistory.push(Transaction({
            from: currentOwner,
            to: newOwner,
            timestamp: block.timestamp,
            message: _message,
            landId: _uniqueId // Added landId to the Transaction struct
        }));

        currentOwner.transfer(lands[_uniqueId].price);
        
        if (excessPayment > 0) {
            newOwner.transfer(excessPayment);
        }

        emit LandPurchased(_uniqueId, msg.sender, lands[_uniqueId].price);
    }

    function getLandsByOwner(address _owner) public view returns (uint[] memory) {
        uint counter = 0;
        for (uint i = 0; i < lands.length; i++) {
            if (lands[i].owner == _owner) {
                counter++;
            }
        }

        uint[] memory result = new uint[](counter);
        counter = 0; // Reset counter for re-use

        for (uint i = 0; i < lands.length; i++) {
            if (lands[i].owner == _owner) {
                result[counter] = i;
                counter++;
            }
        }

        return result;
    }

    function getTransactionHistory(uint _uniqueId) external view returns (uint[] memory) {
        uint counter = 0;
        for (uint i = 0; i < transactionHistory.length; i++) {
            if (transactionHistory[i].landId == _uniqueId) {
                counter++;
            }
        }

        uint[] memory result = new uint[](counter);
        counter = 0; // Reset counter for re-use

        for (uint i = 0; i < transactionHistory.length; i++) {
            if (transactionHistory[i].landId == _uniqueId) {
                result[counter] = i;
                counter++;
            }
        }

        return result;
    }

    function changeLandPrice(uint _uniqueId, uint _newPrice) external onlyOwner(_uniqueId) {
        require(landOwners[_uniqueId] != address(0), "Land with this ID does not exist");
        
        lands[_uniqueId].price = _newPrice;
        
        emit LandAdded(_uniqueId, msg.sender, _newPrice);
    }
      function getAllLands() external view returns (Land[] memory) {
        return lands;
    }
    function getAllTransactions() external view returns (Transaction[] memory) {
    return transactionHistory;
}
}
