pragma solidity >=0.5.0;

interface ILibraswapV1Factory {
    function getExchange(address) external view returns (address);
}
