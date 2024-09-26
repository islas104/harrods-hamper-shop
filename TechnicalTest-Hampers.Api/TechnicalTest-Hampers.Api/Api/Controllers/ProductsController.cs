using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using TechnicalTest_Hampers.Api.Models;

namespace TechnicalTest_Hampers.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Retrieve a set of Hampers products
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ProductsModel Get()
        {
            var productDataJson = System.IO.File.ReadAllText("App_Data/Products.json");
            var products = JsonConvert.DeserializeObject<ProductsModel>(productDataJson);

            return products;
        }

        /// <summary>
        /// Submit an order basket
        /// </summary>
        /// <param name="basketModel"></param>
        [HttpPost]
        public string SubmitOrder(dynamic basketModel)
        {
            // Parse the submitted data to JSON
            var requestAsJson = JObject.Parse(basketModel.ToString());

            // Write the incoming json to a file
            System.IO.File.WriteAllText("App_Data/basketModel.json", requestAsJson.ToString());

            // Return a guid to represent a uniquely generated order ref
            return Guid.NewGuid().ToString();
        }
    }
}
