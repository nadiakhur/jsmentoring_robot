using System.Collections.Generic;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using RobotServer.Models;

namespace RobotServer.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ElementController : ApiController
    {
        public IList<ElementModel> GetElements()
        {
            IList<ElementModel> result = new List<ElementModel>();
            result.Add(new ElementModel() { DefaultValue = "100", Image = "img/forward.bmp", Name = "forward", Title = "Вперед", InputType = "text" });
            result.Add(new ElementModel() { DefaultValue = "45", Image = "img/turnRight.bmp", Name = "turnRight", Title = "Направо", InputType = "text" });
            result.Add(new ElementModel() { DefaultValue = "45", Image = "img/turnLeft.bmp", Name = "turnLeft", Title = "Налево", InputType = "text" });
            result.Add(new ElementModel() { DefaultValue = "2", Image = "img/startCycle.bmp", Name = "startCycle", Title = "Начало цикла", InputType = "text" });
            result.Add(new ElementModel() { DefaultValue = string.Empty, Image = "img/endCycle.bmp", Name = "endCycle", Title = "Конец цикла", InputType = string.Empty });
            result.Add(new ElementModel() { DefaultValue = string.Empty, Image = "img/downPen.bmp", Name = "downPen", Title = "Опустить перо", InputType = string.Empty });
            result.Add(new ElementModel() { DefaultValue = string.Empty, Image = "img/upPen.bmp", Name = "upPen", Title = "Поднять перо", InputType = string.Empty });
            result.Add(new ElementModel() { DefaultValue = "#000000", Image = "img/changeColor.bmp", Name = "selectColor", Title = "Изм. цвет", InputType = "color" });
            result.Add(new ElementModel() { DefaultValue = "2", Image = "img/changeWidth.bmp", Name = "changeWidth", Title = "Ширина", InputType = "text" });
            return result;
        } 
    }
}
