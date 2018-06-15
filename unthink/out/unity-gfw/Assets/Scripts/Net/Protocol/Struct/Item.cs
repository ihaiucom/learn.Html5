/**
 *  MADE BY GENERATOR AT 2018-6-14 11:40:17,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  玩家物品的结构
    /// </summary>
    public class Item  : ShardDBObject
    {
        /// <summary>
        /// 对应的策划表id
        /// </summary>
        public int cid = default(int);
        /// <summary>
        ///  物品的数量
        /// </summary>
        public int count = default(int);
        /// <summary>
        ///  对应物品的状态。 
        /// </summary>
        public EItemState state = 0;
    }
    

}

