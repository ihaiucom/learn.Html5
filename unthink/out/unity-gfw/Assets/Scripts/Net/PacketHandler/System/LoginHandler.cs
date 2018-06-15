// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-6-14 11:29:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.System
{
    /// <summary>
    ///  玩家登陆
    /// </summary>
    [MessageHandler(URL = "System/login")]
    public class LoginHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<LoginResponse>>>();
            var arg = new CommonEventArgs<LoginResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<LoginResponse>.EventId, arg);
        }   
    }
}