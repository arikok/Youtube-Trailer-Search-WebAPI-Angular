﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trailer.Models
{
    public abstract class BaseServiceModel
    {
        public abstract string GetCacheKey();
    }
}
