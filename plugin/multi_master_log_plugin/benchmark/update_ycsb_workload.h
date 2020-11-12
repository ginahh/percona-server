#ifndef UPDATE_YCSB_WORKLOAD_HEADER
#define UPDATE_YCSB_WORKLOAD_HEADER

#include <cstdint>
#include "benchlog.h"

namespace Update_YSCB_Workload {

// TODO - Do we need PAGE_theta or ROW_theta ?
::BenchLog::BenchLogRecord gen_benchlog(uint64_t n, double theta);

double zeta(uint64_t n, double theta);
uint64_t zipf(uint64_t n, double theta);

}  // namespace Update_YSCB_Workload
#endif
