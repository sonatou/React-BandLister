using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BandLister.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BandsController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "First get method";
        }

        [HttpPost]
        public string Post()
        {
            return "First post method";
        }

            [HttpPut]
        public string Put()
        {
            return "First put method";
        }

            [HttpDelete]
        public string Delete()
        {
            return "First delete method";
        }
    }
}